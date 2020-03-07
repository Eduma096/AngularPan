import { IsCPFPipe } from './is-cpf.pipe';

describe('IsCPFPipe', () => {
  it('create an instance', () => {
    const pipe = new IsCPFPipe();
    expect(pipe).toBeTruthy();
  });
});
