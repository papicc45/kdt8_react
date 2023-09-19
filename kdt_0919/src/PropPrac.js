import bookImg from './image/book.PNG'

const PropPrac = ({ title, author, price, type }) => {
    const background = {
        backgroundColor : 'beige',
        padding : '20px',
    }

    const best = {
        fontSize : '30px',
        color : 'orange',
        textAlign : 'center',
    }

    const titleStyle = {
        fontSize : '25px',
        textAlign : 'center',
    }

    const imgStyle = {
        textAlign : 'center',
    }

    return <>
        <div style={background}>
            <h3 style={best}>이번주 베스트셀러</h3>
            <div style={imgStyle}>
                <img src={bookImg}></img>
            </div>
            <div style={titleStyle}>{title}</div>
            <div style={titleStyle}>저자 : {author}</div>
            <div style={titleStyle}>판매가 : {price}</div>
            <div style={titleStyle}>구분 : {type}</div>
        </div>
    </>
}

export default PropPrac;