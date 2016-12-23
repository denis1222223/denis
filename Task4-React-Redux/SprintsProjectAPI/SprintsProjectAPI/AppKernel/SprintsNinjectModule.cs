using Ninject.Modules;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SprintsProjectAPI.AppKernel
{
    public class SprintsNinjectModule : NinjectModule
    {
        public override void Load()
        {
            this.Bind<IWeapon>().To<Sword>();
        }
    }
}