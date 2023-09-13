

import { useState, useEffect } from 'react'

const GoalSettings = () => {

    const settings = {
        healthChecks: {
            love: 200,
            run: 100,
            meditation: 100,
            journal: 50
        },
        healthRepeats: {
            walk: 50,
            exercise: 20,
            read: 10,
            meals: 5,
        },
        wealthRepeats: {
            build: 100,
            learn: 100,
            app: 50,
            post: 50
        },
        wealthSlider: {
            title: 'hours of work',
            key: 'work',
            range: 10,
            weight: 50
        },
        happinessChecks: {
            sex: 200,
            deepcon: 200,
            meetup: 200,
            date: 200,
            new: 100
        },
        happinessRepeats: {
            number: 100,
            hangout: 100,
            chat: 50
        },
        happinessSlider: {
            title: 'how was your day',
            range: 10,
            weight: 50
        },
        nodoChecks: {
            porn: 200,
            weed: 200,
            alcohol: 100,
            sugar: 100
        },
        nodoRepeats: {
            caffeine: 50,
            social: 50,
            shows: 50
        }
    }

    useEffect(() => {

        const fetchData = async () => {
            try {

                const userId = localStorage.getItem("userId")
                const postData = await fetch(`http://localhost:8000/user/settings/${userId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(settings)
                })

            } catch (error) {
                console.log("Can't fetch data from constants")
                console.log(error)
            }
        }
        fetchData()
    })


  return (
    <div className="goalsettings">
        goal settings
    </div>
  )
}

export default GoalSettings
