class GitHub {
  constructor() {
    this.client_id = "82b3d5a6c118479c1fe8";
    this.client_secret = "1023fe27743b0d91314b68ff4ff41713ad4d94bc";
    this.repos_count = 6;
    this.repos_sort = "created: asc";
  }

  async getUSer(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos,
    };
  }
}
