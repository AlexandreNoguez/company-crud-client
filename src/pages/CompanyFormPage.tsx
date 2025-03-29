export default function CompanyFormPage() {
  return (
    <div>
      <h1>Cadastro de Empresas</h1>
      <p>Esta é a página de cadastro de empresas.</p>
      <p>Você pode cadastrar uma nova empresa aqui.</p>
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="cnpj">CNPJ:</label>
          <input type="text" id="cnpj" name="cnpj" required />
        </div>
        <div>
          <label htmlFor="fantasyName">Nome Fantasia:</label>
          <input type="text" id="fantasyName" name="fantasyName" required />
        </div>
        <div>
          <label htmlFor="address">Endereço:</label>
          <input type="text" id="address" name="address" required />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
