// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ACE { 
    string public name = "ACE";
    string  public symbol = "ACE";
    uint256 public totalSupply_ = 2000000000000000; // 10 billion tokens
    uint8   public decimals = 6;

    address private seedSale = 0x771a41315a426F9322422dB0C4ecD39431a12F2E;
    address private stragetic = 0x1840F475948393640f6532cFb1f70af0b39CfFFf;
    address private lunchpadSale = 0xA99183cf458521627FBcF9c8d83c4E47E3260002;
    address private playToEarn = 0x46E09cbfca0B6e946DBb4D9C18de5d391567888b;
    address private advisors = 0xbDd12B439ffF9821780773aba1Ea0CA2fD967397;
    address private team = 0xc0E2060ca8DCF05e7259dF4CFafC55F811517d7F;
    address private ecosystemFund = 0xD0230E69899F18105606B3a4bb05BFD5D59e23E4;
    
    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _value
    );

    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );
    
    mapping(address => uint256) public balances;
    mapping(address => mapping(address => uint256)) public allowed;
    
    constructor() {
        balances[seedSale] = 120000000;
        balances[stragetic] = 120000000;
        balances[lunchpadSale] = 100000000;
        balances[playToEarn] = 660000000;
        balances[advisors] = 100000000;
        balances[team] = 400000000;
        balances[ecosystemFund] = 500000000;
    }

    function totalSupply() public view returns (uint256) {
        return totalSupply_;
    }

    function balanceOf(address _owner) public view returns (uint256) {
        return balances[_owner];
    }
    
    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balances[msg.sender] >= _value);
        balances[msg.sender] = balances[msg.sender] - _value;
        balances[_to] =  balances[_to] + _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowed[msg.sender][_spender] = _value; 
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(_value <= balances[_from]);
        require(_value <= allowed[_from][msg.sender]);
        balances[_from] -= _value;
        balances[_to] += _value;
        allowed[_from][msg.sender] -= _value; 
        emit Transfer(_from, _to, _value);
        return true;
    }
    
    function allowance(address _owner, address _spender) public view returns (uint256 remaining) {
        return allowed[_owner][_spender];
    }
}

