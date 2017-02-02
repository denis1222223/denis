using System.Web.Configuration;
using Owin;
using Microsoft.Owin.Security.ActiveDirectory;
using System.IdentityModel.Tokens;
using System.IdentityModel;
using System.Linq;

namespace SprintsManager
{
    public class AuthConfig
    {
        public static void Register(IAppBuilder app)
        {
           var issuer = $"https://{WebConfigurationManager.AppSettings["auth0:Domain"]}/";
            var audience = WebConfigurationManager.AppSettings["auth0:ClientId"];

            app.UseActiveDirectoryFederationServicesBearerAuthentication(
                new ActiveDirectoryFederationServicesBearerAuthenticationOptions
                {
                    TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidAudience = audience,
                        ValidIssuer = issuer,
                        IssuerSigningKeyResolver = (token, securityToken, identifier, parameters) =>
                            parameters.IssuerSigningTokens.FirstOrDefault()?.SecurityKeys?.FirstOrDefault()
                    },
                    MetadataEndpoint = $"{issuer.TrimEnd('/')}/wsfed/{audience}/FederationMetadata/2007-06/FederationMetadata.xml"
                });
        }
    }
}