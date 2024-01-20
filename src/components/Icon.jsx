const Icon = ({ icon }) => {
  if (icon === 'name') {
    return (
      <svg width='512' height='512' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0L5 16ZM15 6l3 3m-5 11h8' />
      </svg>
    )
  }
  if (icon === 'text') {
    return (
      <svg width='512' height='512' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'>
        <g fill='none' stroke='currentColor' strokeLinejoin='round' strokeWidth='4'>
          <rect width='36' height='36' x='6' y='6' rx='3' />
          <path strokeLinecap='round' d='M16 19v-3h16v3M22 34h4m-2-16v16' />
        </g>
      </svg>
    )
  }
  if (icon === 'resizable') {
    return (
      <svg width='512' height='512' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'>
          <path d='M4 11v8a1 1 0 0 0 1 1h8M4 6V5a1 1 0 0 1 1-1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1-1 1h-1' />
          <path d='M4 12h7a1 1 0 0 1 1 1v7' />
        </g>
      </svg>
    )
  }
  if (icon === 'draggable') {
    return (
      <svg width='512' height='512' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
        <path fill='currentColor' d='M10 2a.75.75 0 0 1 .53.22l1.5 1.5a.75.75 0 0 1-1.06 1.06l-.22-.22v1.69a.75.75 0 0 1-1.5 0V4.56l-.22.22a.75.75 0 0 1-1.06-1.06l1.5-1.5A.75.75 0 0 1 10 2Zm2 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm-9.78-.53a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06l-.22-.22h1.69a.75.75 0 0 0 0-1.5H4.56l.22-.22a.75.75 0 0 0-1.06-1.06l-1.5 1.5ZM10 18a.75.75 0 0 0 .53-.22l1.5-1.5a.75.75 0 1 0-1.06-1.06l-.22.22v-1.69a.75.75 0 0 0-1.5 0v1.69l-.22-.22a.75.75 0 0 0-1.06 1.06l1.5 1.5c.14.141.331.22.53.22Zm7.78-8.53a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22h-1.69a.75.75 0 0 1 0-1.5h1.69l-.22-.22a.75.75 0 0 1 1.06-1.06l1.5 1.5Z' />
      </svg>
    )
  }
  if (icon === 'guides') {
    return (
      <svg width='512' height='512' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
        <path fill='currentColor' d='M28 23v3.586l-5-5V15a1 1 0 0 0-.553-.894L17 11.381V5.828l2.586 2.586L21 7l-5-5l-5 5l1.414 1.414L15 5.828v5.554l-5.447 2.723A1 1 0 0 0 9 15v6.586l-5 5V23H2v7h7v-2H5.414l4.783-4.783l5.356 2.678a1.001 1.001 0 0 0 .894 0l5.356-2.678L26.586 28H23v2h7v-7Zm-13 .382l-4-2v-4.764l4 2Zm1-6.5L12.236 15L16 13.118L19.764 15Zm5 4.5l-4 2v-4.764l4-2Z' />
      </svg>
    )
  }
  if (icon === 'size') {
    return (
      <svg width='512' height='512' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path fill='currentColor' d='M6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v1.5a.75.75 0 0 1-1.5 0v-1.5A3.25 3.25 0 0 1 6.25 3h1.5a.75.75 0 0 1 0 1.5h-1.5ZM19.5 6.25a1.75 1.75 0 0 0-1.75-1.75h-1.5a.75.75 0 0 1 0-1.5h1.5A3.25 3.25 0 0 1 21 6.25v1.5a.75.75 0 0 1-1.5 0v-1.5Zm0 11.5a1.75 1.75 0 0 1-1.75 1.75h-1.5a.75.75 0 0 0 0 1.5h1.5A3.25 3.25 0 0 0 21 17.75v-1.5a.75.75 0 0 0-1.5 0v1.5Zm-15 0c0 .966.784 1.75 1.75 1.75h1.5a.75.75 0 0 1 0 1.5h-1.5A3.25 3.25 0 0 1 3 17.75v-1.5a.75.75 0 0 1 1.5 0v1.5ZM8.25 6A2.25 2.25 0 0 0 6 8.25v7.5A2.25 2.25 0 0 0 8.25 18h7.5A2.25 2.25 0 0 0 18 15.75v-7.5A2.25 2.25 0 0 0 15.75 6h-7.5ZM7.5 8.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-7.5Z' />
      </svg>
    )
  }
  if (icon === 'location') {
    return (
      <svg width='512' height='512' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m21 3l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1L21 3' />
      </svg>
    )
  }
  if (icon === 'visibility') {
    return (
      <svg width='512' height='512' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path fill='currentColor' d='M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z' />
      </svg>
    )
  }
  if (icon === 'delete') {
    return (
      <svg width='512' height='512' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path fill='currentColor' d='M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z' />
      </svg>
    )
  }
  if (icon === 'dashed') {
    return (
      <svg width='512' height='512' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10.1 2.18a9.93 9.93 0 0 1 3.8 0m3.7 1.53a9.95 9.95 0 0 1 2.69 2.7m1.53 3.69a9.93 9.93 0 0 1 0 3.8m-1.53 3.7a9.95 9.95 0 0 1-2.7 2.69m-3.69 1.53a9.94 9.94 0 0 1-3.8 0m-3.7-1.53a9.95 9.95 0 0 1-2.69-2.7M2.18 13.9a9.93 9.93 0 0 1 0-3.8m1.53-3.7a9.95 9.95 0 0 1 2.7-2.69' />
      </svg>
    )
  }
  if (icon === 'check') {
    return (
      <svg width='512' height='512' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path fill='currentColor' d='M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17z' />
      </svg>
    )
  }
  if (icon === 'line-offset') {
    return (
      <svg width='512' height='512' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path fill='currentColor' d='M18 16v-3h-3v9h-2V2h2v9h3V8l4 4l-4 4M2 12l4 4v-3h3v9h2V2H9v9H6V8l-4 4Z' />
      </svg>
    )
  }
  if (icon === 'tooltip') {
    return (
      <svg width='512' height='512' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path fill='currentColor' d='M4 2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4l-4 4l-4-4H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v12h4.83L12 19.17L15.17 16H20V4H4m2 3h12v2H6V7m0 4h10v2H6v-2Z' />
      </svg>
    )
  }
  if (icon === 'boxes') {
    return (
      <svg width='512' height='512' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
        <path fill='currentColor' d='M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2l-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504L1.508 9.071l2.742 1.567l2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134l2.75 1.571v-3.134L8.5 9.933zm.508-3.996l2.742 1.567l2.742-1.567l-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643L8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z' />
      </svg>
    )
  }
  if (icon === 'lateral-lines') {
    return (
      <svg width='512' height='512' viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg'>
        <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' d='M11.5 7h-9M5 4.5L2.5 7L5 9.5m4-5L11.5 7L9 9.5M.5.5v13m13-13v13' />
      </svg>
    )
  }
  if (icon === 'lines') {
    return (
      <svg width='512' height='512' viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg'>
        <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' d='M13.5 2H6m5 5H3.5m5 5h-8' />
      </svg>
    )
  }
  if (icon === 'settings') {
    return (
      <svg width='512' height='512' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path fill='currentColor' d='m9.25 22l-.4-3.2q-.325-.125-.613-.3t-.562-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.337v-.674q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2h-5.5ZM11 20h1.975l.35-2.65q.775-.2 1.438-.588t1.212-.937l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12q0-.4-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587L11 20Zm1.05-4.5q1.45 0 2.475-1.025T15.55 12q0-1.45-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12q0 1.45 1.012 2.475T12.05 15.5ZM12 12Z' />
      </svg>
    )
  }
  if (icon === 'minimize') {
    return (
      <svg width='512' height='512' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path fill='currentColor' d='M7 19h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1z' />
      </svg>
    )
  }
  if (icon === 'move-vertical') {
    return (
      <svg width='512' height='512' viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg'>
        <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' d='M10.13 3.48L7.26.61a.36.36 0 0 0-.52 0L3.87 3.48m6.26 7.04l-2.87 2.87a.36.36 0 0 1-.52 0l-2.87-2.87M.5 7h13' />
      </svg>
    )
  }
  if (icon === 'move-horizontal') {
    return (
      <svg width='512' height='512' viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg'>
        <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' d='M3.48 3.87L.61 6.74a.36.36 0 0 0 0 .52l2.87 2.87m7.04-6.26l2.87 2.87a.36.36 0 0 1 0 .52l-2.87 2.87M7 13.5V.5' />
      </svg>
    )
  }
  if (icon === 'chain') {
    return (
      <svg width='512' height='512' viewBox='0 0 1664 1664' xmlns='http://www.w3.org/2000/svg'>
        <path fill='currentColor' d='M1456 1216q0-40-28-68l-208-208q-28-28-68-28q-42 0-72 32q3 3 19 18.5t21.5 21.5t15 19t13 25.5t3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13t-19-15t-21.5-21.5t-18.5-19q-33 31-33 73q0 40 28 68l206 207q27 27 68 27q40 0 68-26l147-146q28-28 28-67M753 511q0-40-28-68L519 236q-28-28-68-28q-39 0-68 27L236 381q-28 28-28 67q0 40 28 68l208 208q27 27 68 27q42 0 72-31q-3-3-19-18.5T543.5 680t-15-19t-13-25.5T512 608q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13t19 15t21.5 21.5t18.5 19q33-31 33-73m895 705q0 120-85 203l-147 146q-83 83-203 83q-121 0-204-85l-206-207q-83-83-83-203q0-123 88-209l-88-88q-86 88-208 88q-120 0-204-84L100 652q-84-84-84-204t85-203L248 99q83-83 203-83q121 0 204 85l206 207q83 83 83 203q0 123-88 209l88 88q86-88 208-88q120 0 204 84l208 208q84 84 84 204' />
      </svg>
    )
  }
  if (icon === 'tools') {
    return (
      <svg width='512' height='512' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
        <path fill='currentColor' d='m5.25 2.75l-.563.531l-1.406 1.406l-.531.563l.406.656l2.094 3.5l.281.5H8.47l4 3.969c-3.574 3.59-8.121 8.152-8.281 8.313c-1.567 1.566-1.57 4.132.03 5.625c1.563 1.542 4.11 1.582 5.595 0l.03-.032L16 21.594l6.188 6.218l.093.063c1.57 1.48 4.067 1.5 5.532-.063v-.03h.03c1.532-1.567 1.548-4.114-.03-5.595l-.032-.03l-5.218-5.188c3.511-.328 6.261-3.293 6.312-6.875h.031c.004-.02 0-.043 0-.063V10c.098-1.156-.152-2.262-.75-3.219L27.47 5.72l-4.657 4.656l-1.406-1.469l4.75-4.75l-1.375-.562A7.03 7.03 0 0 0 22 3c-3.844 0-7 3.156-7 7c0 .418.09.781.156 1.156c-.437.438-.765.797-1.281 1.313L9.906 8.5V5.531l-.5-.281l-3.5-2.094zM22 5c.14 0 .238.082.375.094l-3.781 3.781l.687.719l2.813 2.906l.687.719L26.75 9.25c.02.23.184.398.156.656V10c0 2.754-2.246 5-5 5c-.367 0-.812-.086-1.312-.188l-.532-.093l-.375.375l-11.28 11.312h-.032v.032c-.71.777-1.953.796-2.781-.032v-.031h-.032c-.777-.71-.796-1.953.032-2.781c.379-.38 7.718-7.782 11.312-11.375l.407-.406l-.157-.563A6.113 6.113 0 0 1 17 10c0-2.754 2.246-5 5-5zm-16.438.25l2.344 1.438v1l-.218.218h-1L5.25 5.563zm14.625 12.156l6.22 6.188v.031h.03c.778.71.797 1.953-.03 2.781h-.032v.032c-.71.777-1.953.796-2.781-.032l-6.188-6.218z' />
      </svg>
    )
  }
  if (icon === 'window') {
    return (
      <svg width='512' height='512' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 6h.02m0 0h17.96M3.02 6C3 6.314 3 6.702 3 7.2v9.6c0 1.12 0 1.68.218 2.107c.192.377.497.683.874.875c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218a2 2 0 0 0 .875-.875c.218-.427.218-.986.218-2.104V7.197c0-.497 0-.883-.02-1.197M3.02 6c.023-.392.077-.67.198-.908c.192-.377.497-.682.874-.874C4.52 4 5.08 4 6.2 4h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.121.237.175.516.199.908m0 0H21m-7 5l2 2l-2 2m-4 0l-2-2l2-2' />
      </svg>
    )
  }
  if (icon === 'close') {
    return (
      <svg width='512' height='512' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
        <path fill='currentColor' d='m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z' />
      </svg>
    )
  }
  if (icon === 'css-editor') {
    return (
      <svg width='512' height='512' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'>
          <path d='M14 3v4a1 1 0 0 0 1 1h4' />
          <path d='M5 12V5a2 2 0 0 1 2-2h7l5 5v4M8 16.5a1.5 1.5 0 0 0-3 0v3a1.5 1.5 0 0 0 3 0m3 .75c0 .414.336.75.75.75H13a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1.25a.75.75 0 0 1 .75.75m3 4.5c0 .414.336.75.75.75H19a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1.25a.75.75 0 0 1 .75.75' />
        </g>
      </svg>
    )
  }
}

export default Icon
