import './colored.css';

export const ColoredOneTextBox = ({bgColor, text, textColor}) => {
    return (
        <div className="coloredBox" style={{backgroundColor: (bgColor)}} >
            <h2 style={{color: (textColor)}}> {text} </h2>
        </div>
    );
}