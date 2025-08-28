type Theme = {
    onToggle: () => void;
}

export default function ToggleDark({ onToggle }: Theme) {
    return (
        <button 
            onClick={onToggle} 
            className="bg-blue-800 text-white py-2 px-4 rounded-xl"
        >
            Clique aqui para altera o tema
        </button>
    )
}
