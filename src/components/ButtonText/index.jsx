import {Container} from './styles'

export function ButtonText ({title, isActive = false, ...rest}){

    return(
        <Container     
        type="button"   
        {...rest}
        $isactive={isActive}
        >
            
         {title}
            
        </Container>
    )
}