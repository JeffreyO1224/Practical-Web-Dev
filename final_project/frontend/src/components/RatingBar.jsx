export default function RatingBar( {rating, amount, percentage} ) {
    const progress = String(percentage * 40).concat('vw');

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0 0.5vw',
        }}>
            <h2>{rating}★</h2>
            <div style={{
                height: '2vh',
                width: '40vw',
                backgroundColor: 'grey',
                borderRadius: '1rem',
            }}>
                <div style={{
                    height: '2vh',
                    width: progress,
                    backgroundColor: 'green',
                    borderRadius: '1rem',
                }}>
                </div>
            </div>
            <h2>{amount}</h2>
        </div>
    )
}