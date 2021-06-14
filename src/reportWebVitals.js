const reportWebVitals = onPerfentry => {
  if (onPerfentry && onPerfentry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfentry)
      getFID(onPerfentry)
      getFCP(onPerfentry)
      getLCP(onPerfentry)
      getTTFB(onPerfentry)
    })
  }
}

export default reportWebVitals
