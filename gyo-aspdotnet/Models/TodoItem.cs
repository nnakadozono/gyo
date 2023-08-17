using System.ComponentModel.DataAnnotations;

namespace TodoApi.Models
{
    public class TodoItem
    {
        public int id { get; set; }
        public string? task { get; set; }
        public bool completed { get; set; }
    }

    public class TodoItemCreateDTO
    {
        [Required]
        public string? task { get; set; }
        public bool completed { get; set; } = false;
    }

    public class TodoItemUpdateDTO
    {
        [Required]
        public string? task { get; set; }
        public bool completed { get; set; }
    }
}
