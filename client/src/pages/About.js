

import React from 'react'
import Header from '../blocks/Header'
import { CalendarSVG, TechnologySVG, GithubSVG } from '../blocks/svg'
import { useMediaQuery } from 'react-responsive'





const About = () => {



    const isDesktoporLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })


  return (
    <div className="about-page">
        { !isDesktoporLaptop && <Header /> }
        <div className="page-top">
            <h2>About</h2>
            <p>Information about Moonlog</p>
        </div>
        <div className="main">
            <div className="info-blob">
                <div className="blob-item">
                    <h3>initial task</h3>
                    <p>Many people do To-Do lists and try to track their 
                        progress in Notebooks. It is a great way to see 
                        how you perform and improve without losing the 
                        touch of what is important. 
                    </p>
                </div>
                <div className="blob-item">
                    <h3>issue #1</h3>
                    <p>A notebook is most often in the physical form. It 
                        is nice to feel the pen going on the paper and perceive 
                        the touch and smell of it. This comes with a huge disadvantage. 
                        When going on trips/moving. Sleeping in unplanned places one 
                        can not always access the notebook. Even if in the same place 
                        it can happen that you forgot where you put it and thus will 
                        not be an entry. With less consistency the data is less worth 
                        and insightful.
                    </p>
                </div>
                <div className="blob-item">
                    <h3>issue #2</h3>
                    <p>Once you start taking notes and comparing your days and evaluating 
                        the data. It is vastly difficult and time consuming to create entry 
                        areas, change things and even Perceive the data visually. 
                        Visualization is extremely helpful when comparing, and lack 
                        thereof is a lost oppurtunity.
                    </p>
                </div>
                <div className="blob-item">
                    <h3>issue #3</h3>
                    <p>Humans think narrowly. We do not have as much RAM as we imagine. 
                        We forget things, lose focus and zoom in on a immediate problem 
                        and forget the big picture. Many times i focused on one are of life 
                        like working and learning (wealth) and forgot about my happiness 
                        level or my health situation. When forgetting even one of those it 
                        can create a huge dip in your life quality and performance. After 
                        all we are not machines.
                    </p>
                </div>
                <div className="blob-item">
                    <h3>idea</h3>
                    <p>So in Order to be able to track my progress each evening I decided 
                        to make a way to enter the data super fast and let a predetermine 
                        scoring system handle the work of summing, visualizing and comparing. 
                        So I know how i do over time and what areas in my life are getting 
                        better/worse. It is also extremely helpful in spotting when a possibly 
                        bad Life period is coming and preventing that. This is a simple tool 
                        for the little Data Geek in me and possibly for you :)
                    </p>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <div className="icon-container">
                        <CalendarSVG />
                    </div>
                    <div className="card-title">Release Date</div>
                    <div className="card-value">14-11-2023</div>
                </div>
                <div className="card">
                    <div className="icon-container">
                        <TechnologySVG />
                    </div>
                    <div className="card-title">Technologies</div>
                    <div className="card-value">React | Node</div>
                </div>
                <a className="card" target="_blank" href="https://github.com/JaceksFridge">
                    <div className="icon-container">
                        <GithubSVG />
                    </div>
                    <div className="card-title">Github</div>
                    <div className="card-value">JacekFridge</div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default About
