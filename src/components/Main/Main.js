import '../Main/Main.css'
function Main() {
    return (
        <div className="Main">
            <div className='main-text'>
                <h1>The Student Hub</h1>
                <h2>Save up to 90% on textbooks *</h2>
            </div>
            <form className='form'>
                <input className='main-input' type='text' value='Enter ISBN, title, or author`s name'></input>
                <input className='main-submit' type="submit" value="Find a book"></input>
            </form>
            <div className='form-text'>
                21-day satisfaction guarantee, 14 days for eTextBooks
            </div>
            <div className='main-boxes'>
                <div>
                    SELL BOOKS
                </div>

                <div>
                    <span>NEW</span>EXPLORE CAREERS
                </div>

                <div>
                    24/7 STUDY HELP
                </div>

                <div>
                    RETURN BOOKS
                </div>

                <div>
                    FIND INTERNSHIPS
                </div>
            </div>
            <div className='form-text'>
                Hate to wait? Courtesy eTextbook when available while your books are on the way. **
            </div>
        </div>
    );
}

export default Main