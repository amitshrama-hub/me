import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {LiaHackerrank} from 'react-icons/lia'
import {SiCodechef} from 'react-icons/si'
import {TbBrandLeetcode} from 'react-icons/tb'


const HeaderSocial = () => {
  return (
    <div className="header_social">
        <a href="https://github.com/amitshrama-hub" target='_blank'><FaGithub/></a>
        <a href="https://www.hackerrank.com/_201500083_cs20?hr_r=1" target='_blank'><LiaHackerrank/></a>
        <a href="https://www.codechef.com/users/amitparashar" target='_blank'><SiCodechef/></a>
        <a href="https://leetcode.com/user0475Y/" target='_blank'><TbBrandLeetcode/></a>
    </div>
  )
}

export default HeaderSocial
