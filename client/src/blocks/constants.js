

export const settings = {
    health: {
        slider: {},
        checkers: { yoga: 100, run: 100, },
        counters: { workout: 50, stretch: 50, walk: 50, }
    },
    wealth: {
        slider: { title: "hours of work", range: 40, weight: 50, },
        checkers: { meetup: 100, },
        counters: { learning: 50, application: 25, },
    },
    happiness: {
        slider: { title: "how was your day", range: 10, weight: 20, },
        checkers: { sex: 200, event: 100, },
        counters: { meeting: 50, convo: 50, },
    },
    nodo: {
        slider: {},
        checkers: { weed: -200, alcohol: -100, porn: -100, sugar: -100 },
        counters: { caffeine: -50, tvshows: -50, badfood: -50 },
    }
}

export const healthChecks = {
    love: 200,
    run: 100,
    meditation: 100,
    journal: 50
}

export const healthRepeats = {
    walk: 50,
    exercise: 20,
    read: 10,
    meals: 5,
}

export const wealthRepeats = {
    build: 100,
    learn: 100,
    app: 50,
    post: 50
}

export const wealthSlider = {
    title: 'hours of work',
    key: 'work',
    range: 10,
    weight: 50
}




export const happinessChecks = {
    sex: 200,
    deepcon: 200,
    meetup: 200,
    date: 200,
    new: 100
}

export const happinessRepeats = {
    number: 100,
    hangout: 100,
    chat: 50
}

export const happinessSlider = {
    title: 'how was your day',
    range: 10,
    weight: 50
}

export const nodoChecks = {
    porn: 200,
    weed: 200,
    alcohol: 100,
    sugar: 100
}


export const nodoRepeats = {
    caffeine: 50,
    social: 50,
    shows: 50
}


export const repeatModalData = {
    title: "Groundhog Day!",
    text: "Hold on! Our telepathic data gnome just informed us that you've already submitted your score today. If you want to submit again, no worries! But your old score will have to pack its bags. Up for it?",
    button1: "Abort!",
    button2: "Re-Score"
}


export const logoutModalData = {
    title: "Confirm Logout",
    text: "Are you sure you want to log out? Please make sure you have saved all your work before proceeding. Once you log out, any unsaved changes will be lost.",
    button1: "confirm",
    button2: "cancel"
}


export const resetModalData = {
    title: "Reset Settings",
    text: "Hold on! Our telepathic data gnome just informed us that you've already submitted your score today. If you want to submit again, no worries! But your old score will have to pack its bags. Up for it?",
    button1: "Reset",
    button2: "Cancel"
}

export const deleteModalData = {
    title: "Delete Account",
    text: "Are you sure you want to log out? Please make sure you have saved all your work before proceeding. Once you log out, any unsaved changes will be lost.",
    button1: "Delete",
    button2: "Cancel"
}
