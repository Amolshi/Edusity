import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi sapiente ex quis vitae distinctio quidem, rem doloremque aut voluptatem sed ipsum hic doloribus, nulla saepe rerum exercitationem reiciendis asperiores. Sequi.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui magnam veritatis quod quas commodi laboriosam, esse corrupti quisquam ipsa deleniti unde, earum, consequatur aspernatur ab temporibus natus facilis iusto necessitatibus asperiores repudiandae! Itaque pariatur harum sed quaerat placeat sapiente. Adipisci aut molestias quia cupiditate autem amet fugit quo, sit accusantium!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum enim pariatur eveniet a dolorem rem in reiciendis nihil quasi deserunt?</p>
            </div>
        </div>
    )
}

export default About
