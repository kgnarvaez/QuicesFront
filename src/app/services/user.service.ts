
export class UserService {
  public isAutorized = false;

authorize(x: boolean) {
  this.isAutorized = x;
}

}
