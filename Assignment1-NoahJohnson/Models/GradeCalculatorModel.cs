using System;
using System.ComponentModel.DataAnnotations;

namespace Assignment1_NoahJohnson.Models
{
    public class GradeCalculatorModel
    {
        [Required, Range(1,100)]
        public int assignment { get;set; }

        [Required, Range(1, 100)]
        public int project { get;set; }

        [Required, Range(1, 100)]
        public int quiz { get;set; }

        [Required, Range(1, 100)]
        public int exam { get;set; }

        [Required, Range(1, 100)]
        public int intex { get;set; }
    }
    
}
