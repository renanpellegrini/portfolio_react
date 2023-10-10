import Titulo from '../../../components/Titulo'
import Paragrafo from '../../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim architecto,
      molestiae ipsa repellat perspiciatis harum pariatur omnis, quae ut alias
      dolorum voluptatibus odit! Quisquam totam eligendi blanditiis esse
      sapiente tempora?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=renanpellegrini&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=renanpellegrini&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
