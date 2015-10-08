using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RunningClub.Controllers
{
    public class UploadController : Controller
    {
        public ActionResult UploadDocument()
        {
            return View();
        }

        public ActionResult Index()
        {
            return View();
        }


        [HttpPost]
        public ActionResult Upload()
        {
            string fileName = string.Empty;
            if (Request.Files.Count > 0)
            {
                var file = Request.Files[0];

                if (file != null && file.ContentLength > 0)
                {
                    fileName = Path.GetFileName(file.FileName);
                    var path = Path.Combine(Server.MapPath("~/Images/"), fileName);
                    file.SaveAs(path);
                }
            }

            if (!string.IsNullOrEmpty(fileName))
                return Content("/Images/" + fileName);
            else
                return Content(string.Empty);
        }
    }
}