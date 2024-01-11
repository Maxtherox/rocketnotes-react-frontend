import { Container, Links, Content } from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details(){
  return(
    <Container>
      <Header/>

      <main>
        <Content> 
          <ButtonText title="Excluir nota"/>
          
          <h1>
            Introdução ao react
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Suscipit itaque iste veniam quisquam animi ipsa sed dignissimos doloribus vel,
              voluptates esse molestiae nesciunt ut, vero ipsum laboriosam voluptatum optio error!
          </p>

          <Section title="Links úteis"> 
              <Links>
                <li><a href="#">www.rocketseat.com.br</a></li>  
                <li><a href="#">www.rocketseat.com.br</a></li>  
              </Links>
            </Section>
            <Section title="Marcadores">
                <Tag title="express"/>
                <Tag title="Node"/>
          </Section>
          
          <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  )
}