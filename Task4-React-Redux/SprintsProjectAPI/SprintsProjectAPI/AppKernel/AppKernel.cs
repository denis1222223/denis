using Ninject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SprintsProjectAPI.AppKernel
{
    public class AppKernel
    {
        private static IKernel appKernel;
        private static object sync = new Object();

        public static IKernel getInstance()
        {
            if (appKernel == null)
            {
                lock (sync)
                {
                    if (appKernel == null)
                        appKernel = new StandardKernel(new SprintsNinjectModule());
                }
            }
            return appKernel;
        }
    }
}