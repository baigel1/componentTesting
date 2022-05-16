interface SectionHeaderProps {
    label:string
}

const SectionHeader = ({label}:SectionHeaderProps) => {
    return (
        <div className='text-lg font-bold'>{label}</div>
    )
}

export default SectionHeader