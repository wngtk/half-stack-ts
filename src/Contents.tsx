import Part from "./Part"
import { CoursePart } from "./types"

interface Props {
    courseParts: CoursePart[]
}

const Contents = ({ courseParts }: Props) => {
    return (
        <>
            {courseParts.map((c, idx) => 
                <Part key={idx} coursePart={c} />
            )}
        </>
    )
}

export default Contents
