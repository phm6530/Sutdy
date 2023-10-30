export default function personReducer(person, action){
    switch(action.type){
        case 'updated' : {
            // const {prev, current} = action;
            return {
                ...person,
                mentors: person.mentors.map((event) => { 
                    if (event.name === action.prev) {
                    return { ...event, name: action.current };
                    } else {
                    return event;
                    }
                }),   
            }
        }
        case 'added' : {
            const {name, title} = action;
            return {
                ...person, mentors : [...person.mentors, {id : person.mentors.length + 1 , name ,title}]
            }
        }
        case 'deleted' : {
            const name = action.name;
            
            return {
                ...person,
                mentors : person.mentors.filter(e => e.name !== name)
            }
        }
        default : {
            throw Error(`알수없는 액션 타입 ${action.type}`);
        }
    }
}