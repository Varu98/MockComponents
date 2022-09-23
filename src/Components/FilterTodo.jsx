import { Check, CheckBoxOutlineBlankTwoTone, Close } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const FilterTodo = () => {
  // Your challenge is to add a filter to do the following
  // Show completed todos
  // Show incomplete todos
  // Show all todos
  // The todos data structure is as follows

  const todos = [
    {
      id: 1,
      title: "NeoG assignments",
      completed: false,
    },
    {
      id: 2,
      title: "Pair programming session",
      completed: true,
    },
    {
      id: 3,
      title: "Project submission",
      completed: false,
    },
    {
      id: 4,
      title: "Coding practice",
      completed: true,
    },
  ];
  const [todoData, setTodoData] = useState(todos);

  const showCompletedTodos = () => {
    let completedTodos = todos.filter((todo) => todo.completed);
    setTodoData(completedTodos);
  };

  const showIncompleteTodos = () => {
    let incompleteTodos = todos.filter((todo) => !todo.completed);
    setTodoData(incompleteTodos);
  };
  const showAllTodos = () => {
    setTodoData(todos);
  };
  return (
    <Container>
      <Stack direction={"column"} spacing={2} maxWidth="35rem">
        <Typography variant="h3">Filter Todos</Typography>
        <ButtonGroup variant="contained">
          <Button onClick={showAllTodos}>Show All Todos</Button>
          <Button onClick={showCompletedTodos}>Show Completed Todos</Button>
          <Button onClick={showIncompleteTodos}>Show Incomplete Todos</Button>
        </ButtonGroup>
        <Stack>
          {todoData.map((todo) => {
            return (
              <List>
                <ListItem>
                  <ListItemIcon>
                    {todo.completed ? <Check /> : <Close />}
                  </ListItemIcon>
                  <ListItemText primary={todo.title} />
                </ListItem>
              </List>
            );
          })}
        </Stack>
      </Stack>
    </Container>
  );
};

export default FilterTodo;
