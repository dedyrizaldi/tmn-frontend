import {
  Equipment,
  EquipmentDetailResponse,
  EquipmentResponse,
} from "@/types/equipment";

import {
  EquipmentQuery,
  fetchEquipment,
  fetchEquipments,
} from "@/repositories/equipment.repository";

class EquipmentService {
  async getEquipments(params: EquipmentQuery = {}): Promise<EquipmentResponse> {
    return fetchEquipments(params);
  }

  async getEquipment(slug: string): Promise<Equipment> {
    const response: EquipmentDetailResponse = await fetchEquipment(slug);

    return response.data;
  }

  async getFeaturedEquipments(): Promise<Equipment[]> {
    const response = await fetchEquipments({
      featured: true,
    });

    return response.data;
  }
}

export const equipmentService = new EquipmentService();
