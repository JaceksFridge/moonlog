
import React from 'react'
import AccordionCheckers from './AccordionCheckers'
import AccordionCounters from './AccordionCounters'
import AccordionSlider from './AccordionSlider'
import { SettingsAccordionCheckersSVG, SettingsAccordionCountersSVG, SettingsAccordionSliderSVG } from './svg'

const SettingSection = ({ 
        categoryRef, 
        sectionId, 
        total, 
        settings, 
        toggleAccordion, 
        addActivity, 
        deleteAccordion,
        addNewCheckers,
        addNewCounters,
        addNewSlider
}) => {

    console.log("settings in section: ", settings)
  return (
    <div ref={categoryRef} className="section" id={`${sectionId}-section`} >
        <div className="section-top">
            <h2 className="section-title">{`${sectionId} Settings`}</h2>
            <p className="section-number">0 - {total}</p>
        </div>
        <div className="actives-box">
            <div className="info-box">
                <div className="circle"></div>
                <p>active</p>
            </div>
            { settings[sectionId] && settings[sectionId].active && 
            Object.entries(settings[sectionId].active).map(([key, value], index) => {
                const accordionType = key.split('_')[0];
                return (
                    <div key={key} className='active-accordion'>
                        {accordionType == "checkers" && <AccordionCheckers  
                            accordionKey={key} 
                            category={sectionId}
                            settings={value}
                            isActive={true} 
                            toggleAccordion={toggleAccordion}
                            addActivity={(newActivity) => addActivity(sectionId, key, newActivity)}
                            deleteAccordion={deleteAccordion}
                        />}
                        {accordionType == "counters" && <AccordionCounters 
                            accordionKey={key} 
                            category={sectionId}
                            settings={value} 
                            isActive={true} 
                            toggleAccordion={toggleAccordion}
                            addActivity={(newActivity) => addActivity(sectionId, key, newActivity)}
                            deleteAccordion={deleteAccordion}
                        />}
                        {accordionType == "slider" && <AccordionSlider 
                            accordionKey={key} 
                            category={sectionId}
                            settings={value} 
                            isActive={true} 
                            toggleAccordion={toggleAccordion} 
                            addActivity={(newActivity) => addActivity(sectionId, key, newActivity)}
                            deleteAccordion={deleteAccordion}
                        />}
                    </div>
                )
            })
        }
        </div>
        <div className="inactives-box">
            <div className="info-box">
                <div className="circle"></div>
                <p>inactive</p>
            </div>
            { settings[sectionId] && settings[sectionId].inactive && 
            Object.entries(settings[sectionId].inactive).map(([key, value], index) => {
                const accordionType = key.split('_')[0];
                return (
                    <div key={key} className='inactive-accordion'>
                        {accordionType == "checkers" && <AccordionCheckers  
                            accordionKey={key} 
                            category={sectionId}
                            settings={value} 
                            isActive={false} 
                            toggleAccordion={toggleAccordion}
                            addActivity={(newActivity) => addActivity(sectionId, key, newActivity)}
                            deleteAccordion={deleteAccordion}
                        />}
                        {accordionType == "counters" && <AccordionCounters 
                            accordionKey={key} 
                            category={sectionId}
                            settings={value} 
                            isActive={false} 
                            toggleAccordion={toggleAccordion}
                            addActivity={(newActivity) => addActivity(sectionId, key, newActivity)}
                            deleteAccordion={deleteAccordion}
                        />}
                        {accordionType == "slider" && <AccordionSlider 
                            accordionKey={key} 
                            category={sectionId}
                            settings={value} 
                            isActive={false} 
                            toggleAccordion={toggleAccordion} 
                            addActivity={(newActivity) => addActivity(sectionId, key, newActivity)}
                            deleteAccordion={deleteAccordion}
                        />}
                    </div>
                )
            })
        }
        </div>
        <div className="accordion-container">
            <div 
                className="add-checkers"
                onClick={addNewCheckers}
            >
                <div className="add-accordion">
                    <SettingsAccordionCheckersSVG />
                </div>
                <h4 className="add-text">checkers</h4>
            </div>
            <div 
                className="add-slider"
                onClick={addNewSlider}
            >
                <div className="add-accordion">
                    <SettingsAccordionSliderSVG />
                </div>
                <h4 className="add-text">slider</h4>
            </div>
            <div 
                className="add-counters"
                onClick={addNewCounters}
            >
                <div className="add-accordion">
                    <SettingsAccordionCountersSVG />
                </div>
                <h4 className="add-text">counters</h4>
            </div>

        </div>
    </div>
  )
}

export default SettingSection
