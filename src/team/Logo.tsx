import logoImage from '../../public/assets/shared/logo.svg'

const Logo = () => {
    return (
        <img 
            src={logoImage} 
            alt='Space tourism logo'
            className="w-10 h-10 md:w-12 md:h-12"
        />
    )
}

export default Logo
