import LinkedListNode from './LinkedListNode';
import Comparator from '../../utils/Comparator';

export default class LinkedList {
  constructor(comparatorFunction) {
    this.head = null;
    this.tail = null; 
    this.compare = new Comparator(comparatorFunction);
  }

  prepend(value) {
    //Create new node and make it the head 
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;  

    //If there is no tail, make new node the tail
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    //If there is no head, make new node the head 
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    //Attach new node to the end 
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  

}