import './NumeroA.css';

function NumeroA() {
    return (
        <form>
            <label for="A">A: </label>
            <input type='number' />
            <label for="B">B: </label>
            <input type='number'/>
            <div>
              <button>+</button>
              <button>-</button>
              <button>*</button>
              <button>/</button>
            </div>
        </form>
    )
}

export default NumeroA;