import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MENUITEMS } from '../utils/navMenu';
import { useHistory } from "react-router-dom";
import ClearIcon from "@material-ui/icons/Clear";
import { connect } from "react-redux";
import { types } from "../redux/global/types";
import ApplyNow from '../components/Modals/ApplyNow/ApplyNow';
import { Dropdown } from "react-bootstrap";


const Nav = (props) => {
    const [showModal, setShowModal] = useState(false);

    const [mainmenu, setMainMenu] = useState(MENUITEMS);
    const [sidebar, setSidebar] = useState(false);

    const closeSidebar = () => {
        setSidebar(!sidebar)
        document.querySelector('.navbar').classList.remove('openSidebar')
    }
    const history = useHistory();


    useEffect(() => {
        const currentUrl = history.location.pathname.split('/')[2];
        mainmenu.filter(items => {
            if (items.path === currentUrl)
                setNavActive(items)
            if (!items.children) return false
            items.children.filter(subItems => {
                if (subItems.path === currentUrl)
                    setNavActive(subItems)
                if (!subItems.children) return false
                subItems.children.filter(subSubItems => {
                    if (subSubItems.path === currentUrl)
                        setNavActive(subSubItems)
                })
            })
        })

    }, [])

    const setNavActive = (item) => {
        MENUITEMS.filter(menuItem => {
            if (menuItem != item)
                menuItem.active = false
            if (menuItem.children && menuItem.children.includes(item))
                menuItem.active = true
            if (menuItem.children) {
                menuItem.children.filter(submenuItems => {
                    if (submenuItems.children && submenuItems.children.includes(item)) {
                        menuItem.active = true
                        submenuItems.active = true
                    }
                })
            }
        })
        item.active = !item.active
        setMainMenu({ mainmenu: MENUITEMS })

    }

    // Click Toggle menu
    const toggletNavActive = (item) => {

        if (!item.active) {
            MENUITEMS.forEach(a => {
                if (MENUITEMS.includes(item))
                    a.active = false
                if (!a.children) return false
                a.children.forEach(b => {
                    if (a.children.includes(item)) {
                        b.active = false
                    }
                    if (!b.children) return false
                    b.children.forEach(c => {
                        if (b.children.includes(item)) {
                            c.active = false
                        }
                    })
                })
            });
        }
        item.active = !item.active
        setMainMenu({ mainmenu: MENUITEMS })
    }


    return (
        <div className={`navbar`} id="togglebtn">
            <div className="responsive-btn d-flex justify-content-end align-items-center">
                <p className="modalIconStyle">
                    <ClearIcon
                        onClick={closeSidebar}
                    />
                </p>
            </div>
            <ul className="main-menu">
                {MENUITEMS.map((menuItem, i) => {
                    return (
                        <li key={i} className={"navItemStyle"}>

                            {(menuItem.type === 'sub') ?
                                <>
                                    <a className="dropdown mblscreenLocations" onClick={() => toggletNavActive(menuItem)}>
                                        <span>{menuItem.title}</span>
                                    </a>
                                    <a className="dropdown desktopcreenLocations" href={`/${props.global.activeLanguage}/locations`} onClick={() => toggletNavActive(menuItem)}>
                                        <span>{menuItem.title}</span>
                                    </a>
                                </>
                                : ''}
                            {(menuItem.type === 'link') &&
                                <a
                                    href={`/${props.global.activeLanguage}/${menuItem.path}`}
                                    className={`${menuItem.active ? 'active' : ''}`}
                                >
                                    {menuItem.title}
                                </a>
                                // <Link to={`/${props.global.activeLanguage}/${menuItem.path}`}
                                //     className={`${menuItem.active ? 'active' : ''} navMenuLink`}
                                // >
                                //     {menuItem.title}
                                // </Link>
                            }
                            {menuItem.children &&
                                <ul
                                    className={`${menuItem.active ? 'menu-open activeSubmenu' : ''}`}
                                    style={menuItem.active ? { opacity: 1, transition: 'opacity 500ms ease-in' } : {}}
                                >
                                    {menuItem.children.map((childrenItem, index) =>
                                        <li key={index} className={`${childrenItem.children ? 'sub-menu ' : ''}`}>
                                            {(childrenItem.type === 'sub') ?
                                                <a href="#javascript" onClick={() => toggletNavActive(childrenItem)} >
                                                    {childrenItem.title}
                                                </a>
                                                : ''}
                                            {(childrenItem.type === 'link') ?
                                                <Link href={`${childrenItem.path}`}>
                                                    <a>    {childrenItem.title} </a>
                                                </Link>
                                                : ''}
                                            {childrenItem.children ?
                                                <ul className={`${childrenItem.active ? 'menu-open' : 'active'}`}>
                                                    {childrenItem.children.map((childrenSubItem, key) =>
                                                        <li key={key}>
                                                            {(childrenSubItem.type === 'link') ?
                                                                <Link href={`${childrenSubItem.path}`} >
                                                                    <a className="sub-menu-title">{childrenSubItem.title}</a>
                                                                </Link>
                                                                : ''}
                                                        </li>
                                                    )}
                                                </ul>
                                                : ''}
                                        </li>
                                    )}
                                </ul>}
                        </li>
                    )
                })}
                <li>  <button className='otfBtn1 ml-3'
                    style={{
                        padding: "0.5rem 1.5rem"
                    }}
                    onClick={() => setShowModal(true)}
                >BOOK YOUR FREE CLASS!</button>
                    <ApplyNow
                        show={showModal} onHide={() => setShowModal(false)}
                        title={"Free Class"}
                    />
                </li>
                {/* <div
                    className={props.global.activeLanguage === "ar" ? "dropdown ml-2" : "dropdown mr-2"}
                >

                    <Dropdown>
                        <Dropdown.Toggle
                            variant=" btn-sm"
                        >
                            {props.global.activeLanguage === "en" ? "Language" : "اللغة"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item as="button"
                                className={props.global.activeLanguage === "en" ? "active" : ""}
                            >
                                <div onClick={() => {
                                    props.setActiveLanguage("en");
                                }}>
                                    {props.global.activeLanguage === "en" ? "English" : "English"}
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item as="button" className={props.global.activeLanguage === "ar" ? "active" : ""}>
                                <div onClick={() => {
                                    props.setActiveLanguage("ar");
                                }}>
                                    {props.global.activeLanguage === "en" ? "العربية" : "العربية"}
                                </div>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div> */}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        global: state.globalReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveLanguage: (language) =>
            dispatch({
                type: types.SET_ACTIVE_LANGUAGE,
                payload: {
                    language: language,
                },
            }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
