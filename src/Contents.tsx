import { Course } from "./types"

interface Props {
    courseParts: Course[]
}

const Contents = ({ courseParts }: Props) => {
    return (
        <>
            { courseParts.map(c => 
                <p>{c.name} {c.exerciseCount}</p>
            )    
            }
        </>
    )
}

export default Contents
