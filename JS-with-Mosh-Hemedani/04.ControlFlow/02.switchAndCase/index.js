let role;

switch (role) {
  case "Guest":
    console.log("Guest user");
    break;

  case "Moderator":
    console.log("Moderator user");
    break;

  default:
    console.log("Unknown user");
}

if (role === "Guest") {
  console.log("Guest user");
} else if (role === "Moderator") {
  ("Moderator user");
} else {
  console.log("Unknown user");
}
