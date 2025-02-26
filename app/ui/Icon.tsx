const Icon = () => {
    return (
        <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
            <radialGradient id="grad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{stopColor:'#22c55e', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#06b6d4', stopOpacity:1}} />
            </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="90" fill="url(#grad)" />
        </svg>
    );
  };
  
  export default Icon;