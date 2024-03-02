import { Avatar } from 'antd';
import React from 'react'
import { UserOutlined } from "@ant-design/icons"

const CustomAvatar = ({ name, url, size }: { name?: string | undefined, size?: "small" | "large", url?: string }) => {
  const getNameInitials = (name:string) => (
    name.split(' ')
        .filter((ele,idx,arr) => (idx===0 || idx+1===arr.length))
        .map((ele)=>ele[0].toUpperCase())
        .join('')
    );

  const numberFromText = (text:string) =>{
    const charCodes = text               
      .split('')                         
      .map(char => char.charCodeAt(0))   
      .join('');                         
    return parseInt(charCodes, 10);
  }
  
  const getColor = (text:string) =>{
      return `avatar-bg-color--${numberFromText(getNameInitials(text)) % 18}`
  } 
  return (
    <Avatar size={size} src={url} className={name ? getColor(name): "avatar-bg-color--1" }>
      {(name) ? getNameInitials(name) : <UserOutlined />}
    </Avatar>
  )
}

export default CustomAvatar
