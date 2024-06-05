import { CoursePart } from "./types"

interface Props {
    coursePart: CoursePart
}

const Part = ({ coursePart }: Props) => {
    switch (coursePart.kind) {
        case "basic":
            return (
                <div><h3>{coursePart.name} {coursePart.exerciseCount}</h3><em>{coursePart.description}</em></div>
            )
        case "group":
            return (
                <div><h3>{coursePart.name} {coursePart.exerciseCount}</h3><em>project exercises {coursePart.groupProjectCount}</em></div>
            )
        case "background":
            return (
                <div><h3>{coursePart.name} {coursePart.exerciseCount}</h3><em>{coursePart.description}</em> ${coursePart.backgroundMaterial}</div>
            )
        case "special":
            return (
                <div>
                    <h3>{coursePart.name} {coursePart.exerciseCount}</h3>
                    <em>{coursePart.description}</em>
                    <div>required skills: ${coursePart.requirements.join(',')}</div>
                </div>
            )
        default:
            throw new Error(`Unhandled discriminated union member: ${JSON.stringify(coursePart)}`)
    }
}

export default Part
