import { DocumentReducerService } from './document-reducer.service';
export const store = () => {
    let result = localStorage.getItem('document');
    if (result == null) {
        let doc = new DocumentReducerService();
        localStorage.setItem('document', JSON.stringify(doc));
        return doc;
    }
    return JSON.parse(result);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9teS1jYW52YXMtbGliL3NyYy9saWIvY29tcG9uZW50cy91dGlsL3N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXBFLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxHQUFHLEVBQUU7SUFDeEIsSUFBSSxNQUFNLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QyxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLEdBQUcsR0FBRyxJQUFJLHNCQUFzQixFQUFFLENBQUM7UUFDdkMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQWtCLENBQUM7QUFDN0MsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9jdW1lbnRSZWR1Y2VyU2VydmljZSB9IGZyb20gJy4vZG9jdW1lbnQtcmVkdWNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRG9jdW1lbnRTdGF0ZSB9IGZyb20gJy4vZG9jdW1lbnRSZWR1Y2VyJztcclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gKCkgPT4ge1xyXG4gIGxldCByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG9jdW1lbnQnKTtcclxuICBpZiAocmVzdWx0ID09IG51bGwpIHtcclxuICAgIGxldCBkb2MgPSBuZXcgRG9jdW1lbnRSZWR1Y2VyU2VydmljZSgpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RvY3VtZW50JywgSlNPTi5zdHJpbmdpZnkoZG9jKSk7XHJcbiAgICByZXR1cm4gZG9jO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIEpTT04ucGFyc2UocmVzdWx0KSBhcyBEb2N1bWVudFN0YXRlO1xyXG59O1xyXG4iXX0=