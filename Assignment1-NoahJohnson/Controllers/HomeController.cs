using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Assignment1_NoahJohnson.Models;
using Microsoft.AspNetCore.Mvc;

namespace Assignment1_NoahJohnson.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("GradeCalculator")]
        public IActionResult GradeCalculator()
        {
            return View();
        }

        [HttpPost("GradeCalculator")]
        public IActionResult GradeCalculator(GradeCalculatorModel model)
        {
            return View();
        }
    }
}