import React, { useState } from 'react'
import Cropper from 'react-easy-crop'
import getCroppedImg from '../lib/cropImage'

export default function CropImage ({
  url,
  onCancel,
  onOk,
  aspect = 1,
  cropShape = 'rect'
}) {
  const [crop, setcrop] = useState({ x: 0, y: 0 })
  const [zoom, setzoom] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

  const paddingTop = `${100 / aspect}%`

  const cropSize = {
    width: 330,
    height: 330 / aspect
  }

  async function cropImage () {
    const croppedImage = await getCroppedImg(url, croppedAreaPixels, rotation)
    onOk(croppedImage)
  }

  function onCropComplete (croppedArea, croppedPixels) {
    setCroppedAreaPixels(croppedPixels)
  }

  return (
    <div className={`modal ${url ? 'is-active' : ''}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box is-narrow">
          <div className="field">
            <div className="cropperWrapper" style={{ paddingTop }}>
              <Cropper
                image={url}
                aspect={aspect}
                cropSize={cropSize}
                cropShape={cropShape}

                onRotationChange={setRotation}
                onCropComplete={onCropComplete}
                onZoomChange={setzoom}
                onCropChange={setcrop}
                rotation={rotation}
                minZoom={0.5}
                crop={crop}
                zoom={zoom}
                showGrid={false}
                restrictPosition={false}
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button
                onClick={onCancel}
                className="button"
              >
                Cancelar
              </button>
            </div>
            <div className="control">
              <button
                className="button is-primary"
                onClick={cropImage}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close"></button>
    </div>
  )
}
