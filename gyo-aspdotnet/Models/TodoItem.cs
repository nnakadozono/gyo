using System.ComponentModel.DataAnnotations;

namespace TodoApi.Models
{
    public class TodoItem
    {
        public int Id { get; set; }
        public string? Task { get; set; }
        public bool Completed { get; set; }
    }

    public class TodoItemCreateDTO
    {
        [Required]
        public string? Task { get; set; }
        public bool Completed { get; set; } = false;
    }

    public class TodoItemUpdateDTO
    {
        [Required]
        public string? Task { get; set; }
        public bool Completed { get; set; }
    }
}
