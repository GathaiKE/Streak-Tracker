interface Habits{
    id: number,
    habitName: string,
    habitImg: string,
    streakStart: string,
    streakTime: number
}

class habit {
    async showHabit(id:number){
        let response = await fetch("http://localhost:3000/habit")
        let habits = await response.json() as Habits[]
        html=document.querySelector(".habit") as HTMLElement
        html += habits
    }
}