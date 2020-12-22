using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TodoApplication.Models;

namespace TodoApplication.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class TodoController : ControllerBase 
    {
        private static readonly string[] names = new[]
        {
            "Todo 1", "Todo 2", "Todo 3"
        };
        private readonly ILogger<TodoController> _logger;

        public TodoController(ILogger<TodoController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Todo> Get()
        {
            List<Todo> todos = new List<Todo>() {
                new Todo() {Id = 1, Name = "Todo 1"},
                new Todo() {Id = 2, Name = "Todo 2"},
                new Todo() {Id = 3, Name = "Todo 3"},
                new Todo() {Id = 4, Name = "Todo 4"},
            };
            return todos;
        }
    }
}