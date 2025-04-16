export class Company {
  constructor(
    public id: number,
    public name: string,
    public taxId: string,
    public tradeName: string,
    public address: string,
    public createdAt: string,
    public updatedAt: string,
  ) {}

  static fromApi(data: Company): Company {
    return new Company(
      data.id,
      data.name,
      data.taxId,
      data.tradeName,
      data.address,
      data.createdAt,
      data.updatedAt,
    );
  }
}
