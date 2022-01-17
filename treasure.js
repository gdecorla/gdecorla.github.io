var treasurelocation = Math.floor(Math.random() * 9)
var bomblocation = Math.floor(Math.random() * 9)

if (bomblocation === treasurelocation) {
    bomblocation = Math.floor(Math.random() * 9)
}

const treasure = (click) => {
    if (click === treasurelocation) {
      document.getElementById(click).innerHTML = "🤩"
      alert("You win!")
      setTimeout(() => { window.location.reload(); }, 500);
    } else if (click === bomblocation) {
      document.getElementById(click).innerHTML = "😵"
      alert("You lose!")
      setTimeout(() => { window.location.reload(); }, 500);
    } else {
      document.getElementById(click).innerHTML = "😐"
    }
  }
