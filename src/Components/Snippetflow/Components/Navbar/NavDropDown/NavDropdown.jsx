import NavDropdownItem from '../NavDropdownItem/NavDropdownItem';
import './navdropdown.css';
export default function NavDropdown(props){

    let result = props.data.map((each, i) => { 
        return (
                <div className="navdropdown-each-section" key={i}>
                    <h2>{each.name}</h2>
                    {each.dropdownItemData.map((eachItem, idx) => {
                        return ( 
                            <>
                              <NavDropdownItem eachItem={eachItem} idx={idx}/>
                            </>
                        )
                    })}
                </div>
        )
    })

    return (
        <>
          <div className="navdropdown-top-element">
            <div className="navdropdown-container">
                {result}
            </div>
          </div>
        </>
    )
}