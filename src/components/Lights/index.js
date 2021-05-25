import React,{useState} from 'react'

const Lights = () => {

    const [chambre1,setchambre1]=useState('off')
    function validate(event){
        if (event.target.value==='off'){
            setchambre1('on')
        }
        else{
            setchambre1('off')
        }
    }
      

const Lights = () => {
    return (
        <div className='lights'>
            <h3 style={{ textAlign: 'center' }}>Controle Lumière</h3>
            <table>
                <tr>
                    <td>
                        <h5>Contoler chambre 1</h5>
                    </td>
                    <td>
                        <label className="switch ">
                            <input type="checkbox" className="default" />
                            <span className="slider round" />
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>Contoler chambre 2</h5>
                    </td>
                    <td>
                        <label className="switch ">
                            <input type="checkbox" className="warning" />
                            <span className="slider round" />
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>Contoler chambre 3</h5>
                    </td>
                    <td>
                        <label className="switch ">
                            <input type="checkbox" className="info" />
                            <span className="slider round" />
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>Contoler chambre 4</h5>
                    </td>
                    <td>
                        <label className="switch ">
                            <input type="checkbox" className="success" />
                            <span className="slider round" />
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>Contoler chambre 5</h5>
                    </td>
                    <td>
                        <label className="switch ">
                            <input type="checkbox" className="danger" />
                            <span className="slider round" />
                        </label>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Lights
