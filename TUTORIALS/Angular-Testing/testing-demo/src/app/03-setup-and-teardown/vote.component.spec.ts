import { VoteComponent } from './vote.component'; 

const component = new VoteComponent();
describe('VoteComponent', () => {
  it('should increment totalVotes when upvoted', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('should increment totalVotes when upvoted', () => {
    component.upVote();
    expect(component.totalVotes).toBe(2);
  });
});
