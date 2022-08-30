import React from 'react'
import PrevWorkCard from "./prevWorkCard"

const PrevWork = () => {

    return (
        <div>
            <div>
                <h3><i class="fas fa-building" /> Previous Work <i class="fas fa-building" /></h3>
                <PrevWorkCard
                    title={"Construction Manager"}
                    company={"Collaborative Advantage Marketing - Detroit MI 2019"}
                    description={"In 2019, I took over the construction project in the building. The project was to add 4 more floors to the building that would be built into residences. Daily I would manage trades, give them tasks for the day, answer any questions and order supplies. I would direct work for anywhere from 8-15 laborers for the day as well as monitor and evaluate progress. Once the first additional floor was added, residents then moved in (11 total) and I assisted with the move, met any construction/ IT or general building needs. I ended my employment at CAM mid-July 2019."}
                />
                <PrevWorkCard
                    title={"Building Manager"}
                    company={"Collaborative Advantage Marketing - Detroit MI 2017-2019"}
                    description={"From 2017-2019, managed event space with residential lofts, gallery, loading dock and offices. The office space consisted of multiple companies running a food distribution business, event business, loft business, etc. My job was to oversee 5-10 dock worker employees that would perform maintenance around the building as well as assist the food company with tasks like packing, shipping, receiving product and construction. I would also assist any companies in the building that needed help by: help set up and run events for the event space, shopping for supplies, and assist residents with any issues, IT problems, deliveries/pick-ups, security, etc."}
                />
                <PrevWorkCard
                    title={"Operations Consultant"}
                    company={"Goldfish Swim School Franchising – Birmingham MI 2015-2017"}
                    description={"Oversee 15 nationwide locations, interact weekly with franchises by supporting any operations questions 24/7. Key contact for new franchise locations with proactive communications with new owners, staff, managers, and help build better client relations. Successfully oversaw and trained the staff for 10 new franchises. Lead pool pump room contact providing technical assistance for issues or questions for a critical component of any franchise location. Authored knowledge base documents of known problems providing resolution paths solving client issues. Created the Pump Room Training kit for the franchise."}
                />
                <PrevWorkCard
                    title={"Manager On Duty"}
                    company={"Goldfish Swim School Macomb 2014-2015"}
                    description={"Instrumental in successfully opening the Macomb Goldfish franchise location. Trained in Deck Management and Front Desk Operations. Learned the pool pump operations, water quality, and problem solving pump room operations. Excellent communication with students, ability to explain the foundation of swimming simply and effectively receiving feedback from students and parents consistently rating teaching as “highly effective and valuable”. Cold call sales for acquiring new students. Oversaw 25-40 staff members and would train and evaluate them monthly."}
                />
            </div>
        </div>
    )
}

export default PrevWork;