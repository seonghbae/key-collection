# key-collection
# 설계
1. 동기
네이버 부스트캠프 미션을 돌아보며 자바스크립트의 key collection을 클래스로 구현해보고자 합니다.
2. Set과 Map을 클래스로 구현합니다.
3. 메서드는 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set 와 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map 의 내용을 바탕으로 합니다.
## SET
- 생성자
	- `SET(value)`
	- value가 숫자, 문자, 배열일 경우를 나눠서 생성
	- NaN, undefined도 가능 (NaN는 같아도 다르게 취급)
- 속성
	- `#Set` : 멤버가 저장될 set
		- gertter 사용 검토
		- ```jsx
			class SET extends Array{
			  get SET[Symbol.species]{ return Array; }
			}
			```
	- `size` : set의 크기
- 메서드
	- `#removeDuplicate(value)` : 중복된 멤버 제거
	- `#classifyType(value)` : value를 분류
	- `add(value)` : set에 값을 추가
	- `clear()` : set 값 전체 삭제
	- `delete(value)` : set에 값을 삭제
	- `has(value)` : set에 값의 포함여부
	- `values()`, `keys()` , `entries()`, `forEach(callbackFn[, thisArg])` : 대체 가능하기에 삭제
- 연산
	- 내부에서는 protected 활용'_'
	- `isSuperset(set, subset)` : 모집합 여부
	- `union(setA, setB)` : 합집합
	- `intersection(setA, setB)` : 교집합
	- `symmetricDifference(setA, setB)` : 대칭차집합
	- `difference(setA, setB)` : 차집합
## MAP
- key, value 배열로 관리
- 생성자
	- `MAP([...first, ...second])` : 배열이나 함수의 반환값으로도 전달 가능
- 속성
	- `#key` : key가 저장될 배열
	- `#value` : value가 저장될 배열
	- `size` : map의 크기
- 메서드
	- `` : []안의 키로 값 접근
		- https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Iterators_and_Generators 
		- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
	- `clear()` : set 값 전체 삭제
	- `delete(key)` : 대응되는 키와 값 삭제
	- `has(key)` : map에 키의 포함여부
	- `set(key, value)` : 대응되는 키와 값 설정
	- `get(key)` : 키에 대응되는 값을 반환
	- `keys()` : 키의 iterator를 반환
	- `values()` : 값의 iterator를 반환
	- `entries()` : [키, 값] iterator를 반환
	- `forEach(callbackFn[, thisArg])` : 대체 가능하기에 삭제

### 개선사항
- 구현하면서 생긴 문제점이나 새로운 설계, 배경지식, 개선 점 등
---
- SET
- `Object.hasOwnProperty()` : Object 클래스의 메서드, 해당 객체를 가지고 있는지 여부
- `#removeDuplicate(value)`은 `has(value)`로 대체