import React, { ChangeEvent, useRef, useState } from 'react'
import {CameraFilled} from '@ant-design/icons'
import Placeholder from "../../../assets/images/placeholder.png";
import './style.scss'
import { INPUT_TYPE } from '../../../enums/inputType';
type Props = {
	previewUrl?: string
}

const UploadProfile = ({previewUrl}: Props) => {

  const filePickerRef = useRef<HTMLInputElement>(null);
	const [url, setURL] = useState(previewUrl);

	const inputFileUploadHandler= (e: ChangeEvent<HTMLInputElement>) => {
		 const objectURl =  e.target.files?.length && URL.createObjectURL( e.target.files[0])
		 objectURl && setURL(objectURl)
	}

	const openFilePicker = () =>
	filePickerRef.current?.click()
	return (
		<div
		className={`upload-profile-wrapper`}
		key={"2"}
		onClick={openFilePicker}
	>
		<img src={url || Placeholder} alt="Profile" />
	 <div>
					 <div className="icon-wrapper">
					 <CameraFilled />
					</div>
		</div>
		<input
      type={INPUT_TYPE.FILE}
      className="attachment-file-input"
      ref={filePickerRef}
      onChange={inputFileUploadHandler}
    />
	</div>
	)
}

export default UploadProfile